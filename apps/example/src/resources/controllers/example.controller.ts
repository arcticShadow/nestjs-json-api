
import { ExampleService } from "../services/example.service";
import { InjectService, JsonApi, JsonApiController, JsonApiService, QueryParams, ExcludeMethode } from "nest-json-api";
import { Users } from "database";

@JsonApi(Users,
  {
    allowMethode: ExcludeMethode(['getAll', 'deleteRelationship'])
  }
)
export class ExampleController implements JsonApiController {
  public constructor(private readonly exampleService: ExampleService) {
  }
  @InjectService() protected service: JsonApiService;x

  getOne(id: number, params: QueryParams){
    const tmp = this.exampleService.getHello();
    return this.service.getOne({route: {id}, query: params})
  }

}

