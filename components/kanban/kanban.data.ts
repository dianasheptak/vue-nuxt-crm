import {EnumStatus} from "~/types/deals.types";
import type {IColumn} from "~/components/kanban/kanban.types";

export const KANBAN_DATA:IColumn[] = [
    {
    id: EnumStatus.todo,
    name: 'Вхідні',
    items: []
    },
    {
        id: EnumStatus['to-be-agreed'],
        name: 'To be agreed',
        items: [],
    },
    {
        id: EnumStatus['in-progress'],
        name: 'In progress',
        items: [],
    },
    {
        id: EnumStatus.produced,
        name: 'Ready',
        items: [],
    },
    {
        id: EnumStatus.done,
        name: 'To be shipped',
        items: [],
    },

]
