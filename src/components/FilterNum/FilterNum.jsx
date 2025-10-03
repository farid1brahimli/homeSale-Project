import './FilterNum.scss';

const FilterNum = ({ classname }) => {
   
    return (
        <div className={classname}>
            <label htmlFor="">
                {classname}
            </label>
            <div className="radio-group">
                <div className="radio-wrapper">
                    <label htmlFor="" class="radio-label">
                        <span>1</span>
                        <input type="radio" name="option" class="custom-radio" />
                    </label>
                </div>
                <div className="radio-wrapper">
                    <label htmlFor="" class="radio-label">
                        <span>2</span>
                        <input type="radio" name="option" class="custom-radio" />
                    </label>
                </div>
                <div className="radio-wrapper">
                    <label htmlFor="" class="radio-label">
                        <span>3</span>
                        <input type="radio" name="option" class="custom-radio" />
                    </label>
                </div><div className="radio-wrapper">
                    <label htmlFor="" class="radio-label">
                        <span>4+</span>
                        <input type="radio" name="option" class="custom-radio" />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default FilterNum