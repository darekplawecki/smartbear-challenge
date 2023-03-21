export type Response = {
  code: string;
  description: string;
};

export type Parameter = {
  name: string;
  in: string;
  description: string;
  required: boolean;
  type: string;
  format?: string;
};

export type Path = {
  name: string;
  method: string;
  tags: string[];
  summary: string;
  produces: string[];
  parameters: Parameter[];
  responses: Response[];
};

export type Tag = {
  name: string;
  description: string;
};

export type Licence = {
  name: string;
  url: string;
};

export type Contact = {
  email: string;
};

export type Info = {
  baseUrl: string;
  description: string;
  version: string;
  title: string;
  termsOfService: string;
  contact: Contact;
  license: Licence;
};

export type ApiDefinition = {
  info: Info;
  tags: Tag[];
  paths: Path[];
};
