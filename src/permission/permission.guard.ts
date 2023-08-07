import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Permission } from 'src/rba-user/entities/permission.entity';
import { RbaUserService } from '../rba-user/rba-user.service';

@Injectable()
export class PermissionGuard implements CanActivate {

  @Inject(RbaUserService) 
  private userService: RbaUserService;

  @Inject(Reflector) 
  private reflector: Reflector;

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    if(!request.user) {
      return true;
    }

    const roles = await this.userService.findRolesByIds(request.user.roles.map(item => item.id))

    const permissions: Permission[]  = roles.reduce((total, current) => {
      total.push(...current.permissions as never[]);
      return total;
    }, []);

    // console.log(permissions);

    const requirePermissions = this.reflector.getAllAndOverride<string[]>('require-permission', [
      context.getClass(),
      context.getHandler()
    ])

    // console.log(requirePermissions,permissions);
    

    requirePermissions.forEach((item)=>{
      const found = permissions.find(i => i.name === item)

      if (!found) throw new UnauthorizedException('您没有访问该接口的权限')
    })

    console.log(requirePermissions);
    

    return true;
  }
}
