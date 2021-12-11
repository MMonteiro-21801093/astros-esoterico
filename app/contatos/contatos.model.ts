export interface IContatos {
  name?: string;
  email?: string;
  _subject?: string;
  message?: string;
}

export class Contatos implements IContatos {
  constructor(
    public name?: string,
    public email?: string,
    public _subject?: string,
    public message?: string,
  ) {}
}
