export class LikeComponent{
    constructor(private _likeCounts: number, private _isSelected: boolean){
    }

    onClick(){
        this._likeCounts += (this._isSelected) ? -1: +1;
        this._isSelected =! this._isSelected;
    }

    get likeCounts(){
        return this._likeCounts;
    }

    get isSelected(){
        return this._isSelected;
    }
}