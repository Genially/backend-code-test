import faker from "@faker-js/faker";

import { CreateGeniallyServiceRequest } from "../../src/contexts/core/genially/application/models/GeniallyRequest";

export const createGenially = (length = 1): CreateGeniallyServiceRequest[] => {
  return Array.from<CreateGeniallyServiceRequest>({ length}).fill(undefined).map(() =>
    ({
      id: faker.datatype.uuid(),
      name: faker.name.firstName(),
      description: faker.lorem.words(125)
    })
  );
};

export const createInvalidNameGenially = (name: string): CreateGeniallyServiceRequest => {
  return {
      ...createGenially()[0],
      name
    };
};

export const createInvalidDescriptionGenially = (description: string): CreateGeniallyServiceRequest => {
  return {
      ...createGenially()[0],
      description
    };
};
