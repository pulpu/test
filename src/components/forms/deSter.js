
export function handleInputChange(event) {
    const { value, name } = event.target;

    this.setState({
        user:{
            ...this.state.user,
            [name]: value}
    });
}