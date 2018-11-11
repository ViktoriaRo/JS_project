const nameTransform = (name) => {
    if (!name){
        return 'name is required';
    }
    return name + "'s feedback";
}
export default nameTransform;