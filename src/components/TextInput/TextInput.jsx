function TextInput({label, type = "text", value, onChange}){

    return(
        <label>

            {label && <span className="text-gray-700>">{label
            }</span>}

            <input 
                className="px-4 py-2 border border-gray-500 rounded-md w-full"
                onChange={onChange}
                placeholder="Enter you word"
                value={value}
                type={type}
            />

        </label>
    );

}

export default TextInput;