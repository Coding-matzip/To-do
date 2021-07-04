import React ,{useState,useEffect,useRef}from "react";
import "./search.css";
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";


const SearchModal = (props) => {
    const {open, close, SearchValue} = props;
    const [modalopen,setopen]=useState(open);
    const Ref = useRef();
    const [closecontrol,setclosecontrol] = useState("");
    useEffect(() =>{
       
        document.addEventListener('mousedown',HandleClickOutSide);
        return () => {

            document.removeEventListener('mousedown',HandleClickOutSide);
        }
      },[]);

    
    const HandleClickOutSide= (e) => {
        if(Ref.current.className === "Open SearchModal"){
            if(Ref && !Ref.current.contains(e.target)){
                setclosecontrol(close);
            };
        }
        
    }
    const Search = (event) =>{       
       SearchValue(event.target.value);
    }


    return(
        <div ref={Ref} className= {open ? "Open SearchModal" : "SearchModal"} >

            {open ? (
                    
                        <div  className="searchCon">
                            <FaSearch className="icon"/>
                            <input type="text" id="searchInput" onChange={Search} name="searchInput" placeholder="검색할 키워드를 입력하세요!"/>
                            <button className="InputReset" onClick={close}><AiOutlineClose/></button>
                        </div>
                    
            ) : null}
           
        </div>
    )
}

export default SearchModal;