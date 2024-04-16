import { TEditorObject } from './case2';
import { IEntityData } from './entity';
import { IQuest } from './quest';

export function case1(obj: TEditorObject): void {
    if (obj.objType === 'Quest') {
        console.log((obj as IQuest).type);
    } else if (obj.objType === 'Entity') {
        console.log((obj as IEntityData).name);
    }
}
