export class Study{
  constructor(
    public id: string | null | undefined,
    public name: string  |null | undefined,
    public description: string  |null | undefined,
    public start_activity: string  |null | undefined,
    public end_activity: string | null | undefined,
    public institution: string | null | undefined,
    public keep_going: boolean | null | undefined,
    public icon_class: string | null | undefined
  ){ }
}
