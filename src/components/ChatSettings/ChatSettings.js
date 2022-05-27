import { useHttpRequest } from '../../hooks/useHttpRequest';

import './ChatSettings.css';

const ChatSettings = ({ chatItems, setChatItems }) => {

    const { request } = useHttpRequest();

    const optionsInputs = [
        {inputName: 'option1', value: chatItems.option1},
        {inputName: 'option2', value: chatItems.option2},
        {inputName: 'option3', value: chatItems.option3},
        {inputName: 'option4', value: chatItems.option4},
        {inputName: 'option5', value: chatItems.option5},
        {inputName: 'option6', value: chatItems.option6}
    ]

    const answersInputs = [
        {inputName: 'answer1', value: chatItems.answer1},
        {inputName: 'answer2', value: chatItems.answer2},
        {inputName: 'answer3', value: chatItems.answer3},
        {inputName: 'answer4', value: chatItems.answer4},
        {inputName: 'answer5', value: chatItems.answer5},
        {inputName: 'answer6', value: chatItems.answer6}
    ]

    const inputChange = (e) => {
        const { name, value } = e.target;
        setChatItems({
            ...chatItems,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        request('https://getbutton-bot.herokuapp.com/messages', 'PUT', JSON.stringify(chatItems));
    }

    return (
        <div className='settings-box'>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <h3>Options setup</h3>
                        {optionsInputs.map(({ inputName, value }, i) =>
                            <input key={i} type="text" name={inputName} value={value || ''} onChange={inputChange}/>
                        )}
                    </div>
                    <div>
                        <h3>Answers setup</h3>
                        {answersInputs.map(({ inputName, value }, i) =>
                            <textarea key={i} type="text" name={inputName} value={value || ''} onChange={inputChange}/>
                        )}
                    </div>
                </div>
                <button type='submit'>Save</button>
            </form> 
        </div>
    )
}

export default ChatSettings;