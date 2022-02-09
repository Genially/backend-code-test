import faker from "@faker-js/faker";

import { CreateGeniallyServiceRequest } from "../../src/contexts/core/genially/domain/GeniallyRequest";

export const createGenially = (length = 1): CreateGeniallyServiceRequest[] => {
  return Array.from<CreateGeniallyServiceRequest>({ length}).fill(
    {
      id: faker.datatype.uuid(),
      name: faker.name.firstName(),
      description: faker.lorem.words(125)
    }
  );
};

export const createInvalidNameGenionally = (name: string): CreateGeniallyServiceRequest => {
  return {
      ...createGenially()[0],
      name
    };
};

export const createInvalidDescriptionGenionally = (description: string): CreateGeniallyServiceRequest => {
  return {
      ...createGenially()[0],
      description
    };
};
