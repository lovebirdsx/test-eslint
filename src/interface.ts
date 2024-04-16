/** 编辑器对象类型 */
export type TEditorObjectType = 'Entity' | 'EntityTemplate' | 'Flow' | 'LevelPlay' | 'Prefab' | 'Quest';

/** 编辑器对象数据基类接口 */
export interface IEditorObject<T extends TEditorObjectType = TEditorObjectType> {
    /** 对象类型 */
    objType: T;
}
