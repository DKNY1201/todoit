export interface ILabel {
    id: number;
    color: string;
    title: string;
    parentLabelId?: number;
    isFavorite: boolean;
    isSelected: boolean;
}