import { IEditorObject } from './interface';

export interface IQuest extends IEditorObject {
    /** 任务类型 */
    type: string;

    /** 序号 */
    id: number;
}
