import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role } from "./Role/index";

@Injectable()
export class Aaa2Guard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext) {
    const requiredRoles = this.reflector.get<Role[]>('roles', context.getHandler())
    if (!requiredRoles) return true
    const {user} = context.switchToHttp().getRequest()
    return requiredRoles.some((role) => user && user.roles?.includes(role))
  }
} 