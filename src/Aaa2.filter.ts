import { ArgumentsHost, Catch,ExceptionFilter } from "@nestjs/common";
import { Response } from 'express'
import { AaaException } from "./AaaException";

@Catch(AaaException)
export class Aaa2Filter implements ExceptionFilter {
  catch(exception: AaaException, host: ArgumentsHost) {
    console.log(exception, host);
    const type = host.getType()
    if (type === 'http') {
      const ctx = host.switchToHttp()
      const response = ctx.getResponse<Response>()
      const request = ctx.getRequest<Request>()
      response.status(500).json({
        aaa: exception.aaa,
        bbb: exception.bbb
      })
    } else if (type === 'ws') {

    } else if (type === 'rpc') {

    }
  }
}