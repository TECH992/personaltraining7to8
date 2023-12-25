const Dropdown = (props) => {
           return (
                      <div>
                                 <label for="cars" className="hidden">
                                            Choose a car:
                                 </label>
                                 <br />
                                 <select
                                            name="cars"
                                            id="cars"
                                            className="border-[2px] placeholder:text-[14px] placeholder:font-bold placeholder:text-center  border-[#18181B] h-[50px] w-[500px] rounded-[24px] mt-6"
                                            onChange={props.handleSelect}
                                 >
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                 </select>
                      </div>
           );
};

export default Dropdown;
