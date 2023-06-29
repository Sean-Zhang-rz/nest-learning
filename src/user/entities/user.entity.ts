import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Permission } from "./permission.entity";

@Entity({
  name:'user'
})
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 50
  })
  username: string

  @Column({
    length: 50
  })
  password: string

  @CreateDateColumn()
  creteTime: Date;

  @UpdateDateColumn()
  updateTime: Date

  @ManyToMany(() => Permission)
  @JoinTable({
    name: 'user_permission_relation'
  })
  permissions: Permission[]
}
