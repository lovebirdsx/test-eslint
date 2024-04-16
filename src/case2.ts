import { IEntityData } from './entity';
import { IQuest } from './quest';

export type TEditorObject = IEntityData | IQuest;

// 是否为联机相关对象
export function isRelatedOnlineObject(editorObject: TEditorObject): boolean {
    switch (editorObject.objType) {
        case 'Quest':
        case 'Entity': {
            const entity = editorObject as IEntityData;
            return entity.name.startsWith('Online');
        }

        default:
            return false;
    }
}
