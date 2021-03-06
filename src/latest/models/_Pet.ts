import Model from "./Model";
import Toy from "./_Toy";
import { Animal } from "./helpers/_Const";
import { getEnum } from "./helpers/Const"

class Puppy extends Model
{
  static getAnimal = (val: string): Animal => getEnum(Animal, val, Animal.OTHER);

  id: number;
  name: string;
  animal: Animal;
  photo: string;
  toys: Toy[];

  constructor(id: number)
  {
    super();
    this.id = id;
  }

  build(name: string, animal: Animal, photo: string, toys: Toy[]): Puppy
  {
    this.name = name;
    this.animal = animal;
    this.photo = photo;
    this.toys = toys;
    return this;
  }

  toJSON()
  {
    return {
      id: this.id,
      name: this.name,
      animal: this.animal,
      photo: this.photo,
      toys: this.toys
    };
  }
}

export default Puppy;