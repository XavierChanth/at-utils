interface String {
    /**
     * Returns true if the string is empty(length == 0) else false
     */
    isEmpty: boolean;
    /**
     * Returns true if the string is not empty(length != 0) else false
     */
    isNotEmpty: boolean;
}

String.prototype.isEmpty = this.length === 0;

String.prototype.isNotEmpty = this.length !== 0;
