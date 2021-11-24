import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('jwwadmin')
export class jwwadmin {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

}