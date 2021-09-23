import { useState } from 'react'

function BookForm({ addBook }) {
    const [userInput1, setUserInput1] = useState('')
    const [userInput,setUserInput] = useState('')
    const [file, setFile] = useState('data:image/png;base64,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');
    const fileHandler = (e) => {
        let { _file } = file;
        _file = e.target.files[0];
    
        getBase64(_file)
          .then(result => {
            result=_file["base64"];
            
          })
          .catch(err => {
            console.log('Errr!!! ',err);
          });
    
      }
  const handleChange1 = (e) => {
        setUserInput1(e.currentTarget.value)
    }
   const getBase64 = (img) => {
        return new Promise(resolve => {
          let baseURL = "";
          let reader = new FileReader();
         reader.readAsDataURL(img);
          reader.onload = () => {
            baseURL = reader.result;
            console.log(baseURL.split(':image/png;base64,')[1]);
            setFile(baseURL);
            resolve(baseURL);
          };
        });
      };
    const handleKeyPress1 = (e) => {
        if(e.key === "Enter") {
        }
    }
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addBook(userInput,userInput1,file)
        setUserInput("")
        setFile("data:image/png;base64,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")
        setUserInput1("")
    }
    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <table width='100%' height='100%'>
        <tr>
        <td width='46%'>  
             <input 
                value={userInput1}
                type="text"
                onChange={handleChange1}
                onKeyDown={handleKeyPress1}
                placeholder="Введите автора..."
            />      
         </td>
         <td width='8%'>  
        </td> 
        <td  width='46%'>
        <input 
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Введите название..."
            />
        </td>
    </tr>
    <tr>
        <td colspan="3"><center>{file ? <img width='145' height='205' alt='предпросмотр обложки' src={`${file}`}/>:''}</center></td>
    </tr>
    <tr>
        <td><input type="file" onChange={fileHandler} value={null}/></td>
        <td></td>
        <td ><button>Сохранить</button></td>
    </tr>            </table>
        </form>
    )
}

export default BookForm