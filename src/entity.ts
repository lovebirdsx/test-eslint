import { IEditorObject } from './interface';

export interface IEntityData extends IEditorObject<'Entity'> {
    /** 实体名称 */
    name: string;
}
