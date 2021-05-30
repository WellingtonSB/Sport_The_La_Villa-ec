import { Categorias } from './Categorias';
import { User } from './User';

export class Produtos{
  public id: number
  public titulo: string
  public foto: string
  public texto: string
  public data: Date
  public usuario: User
  public categorias: Categorias
}
