import { useState } from "react";
import { GymClass } from "../types/GymClass";

type CreateClassFormProps = {
    createNewClass : (newClass: GymClass) => void;
};

const CreateClassForm: React.FC<CreateClassFormProps> = ({ createNewClass }) => {
    const [newClass, setNewClass] = useState<GymClass>({
        id: 0,
        name: "",
        capacity: 0,
        booked: 0,
        date: "",
        starttime: "",
        endtime: "",
        bookedUsers: []
    })

    const handleSubmitClass = (e: React.FormEvent) => {
        e.preventDefault();
        createNewClass(newClass);
    }
    return (
        <>
        <form className="inputForm" onSubmit={handleSubmitClass}>
            <div className="fieldset">
            <div className="form-row">
                <div className="input-group">
                    <label htmlFor="name">Namn på pass</label>
                    <input value={newClass.name} onChange={(e) => setNewClass({...newClass, name: e.target.value})} required type="text" name="name" id="name" className="input" placeholder="Skriv namnet på passet här" /> 
                </div>
                <div className="input-group">
                    <label htmlFor="time">Max antal deltagare</label>
                    <input value={newClass.capacity} onChange={(e) => setNewClass({...newClass, capacity: parseInt(e.target.value)})} required type="number" name="capacity" id="capacity" className="input"  /> 
                </div>
                <div className="input-group">
                    <label htmlFor="date">Datum</label> 
                    <input value={newClass.date} onChange={(e) => setNewClass({...newClass, date: e.target.value})} required type="date" name="date" id="date" className="input" placeholder="Datum"/>
                </div>
            </div>
            <div className="form-row">
                <div className="input-group">
                    <label htmlFor="starttime">Startar</label>
                    <input value={newClass.starttime} onChange={(e) => setNewClass({...newClass, starttime: e.target.value})} required type="time" name="starttime" id="starttime" className="input" placeholder="Fyll i när passet startar" />
                </div>
                <div className="input-group">
                    <label htmlFor="endtime">Slutar</label>
                    <input value={newClass.endtime} onChange={(e) => setNewClass({...newClass, endtime: e.target.value})} required type="time" name="endtime" id="endtime" className="input" placeholder="Fyll i när passet slutar" />
                </div>
            </div>
            <input type="submit" className="saveBtn" name="skicka" id="skicka" value="Spara pass" />
            </div>
        </form>
        </>
    )

}

export default CreateClassForm;