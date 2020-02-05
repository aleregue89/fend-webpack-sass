import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

// importing scss //
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/resets.scss'


console.log(checkForName);

alert("I EXIST")
console.log("CHANGE!!");

// update JS to use the client Package - export //
export {
    checkForName,
    handleSubmit
};
