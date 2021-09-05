import React, { memo }from 'react';

const HabitAddForm = memo(props => {
    const inputRef = React.createRef();

    const onSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;
        name&&props.onAdd(name);//이름이 있다면 onAdd에 name을 전달
        inputRef.current.value = '';
        // this.formRef.current.reset();
    };
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <input 
                ref={inputRef} 
                type="text" 
                className="add-input" 
                placeholder="habit"
            />
            <button className="add-button">Add</button>
        </form>
    );
});

export default HabitAddForm;
