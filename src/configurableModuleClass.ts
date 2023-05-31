// 声明
import { ConfigurableModuleBuilder } from '@nestjs/common'

interface ModuleOptionsInterface {
  aaa: number;
  bbb: number;
}
export const { 
	ConfigurableModuleClass, 
	MODULE_OPTIONS_TOKEN,
	OPTIONS_TYPE 
} = new ConfigurableModuleBuilder<ModuleOptionsInterface>()
	.setClassMethodName('register') // 设置class，默认为register
	.setExtras(
		{ isGlobal: true }, // 开启全局，可选
		(definition, extras) => ({ // 收到extras后如何修改模块定义
			...definition,
	    global: extras.isGlobal,
		})
	) 
	.build()