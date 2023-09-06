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
        time: "",
        duration: 0,
        bookedUsers: []
    })

    const handleSubmitClass = (e: React.FormEvent) => {
        e.preventDefault();
        createNewClass(newClass);
    }
    return (
        <>
        <form className="inputForm" onSubmit={handleSubmitClass}>
            <input value={newClass.name} onChange={(e) => setNewClass({...newClass, name: e.target.value})} required type="text" name="name" id="name" className="input" placeholder="Typ av pass" /> 
            <input value={newClass.capacity} onChange={(e) => setNewClass({...newClass, capacity: parseInt(e.target.value)})} required type="number" name="capacity" id="capacity" className="input" placeholder="Max antal" /> 
            <input value={newClass.date} onChange={(e) => setNewClass({...newClass, date: e.target.value})} required type="date" name="date" id="date" className="input" placeholder="Datum"/>
            <input value={newClass.time} onChange={(e) => setNewClass({...newClass, time: e.target.value})} required type="text" name="time" id="time" className="input" placeholder="Starttid" />
            <input value={newClass.duration} onChange={(e) => setNewClass({...newClass, duration: parseInt(e.target.value)})} required type="number" name="duration" id="duration" className="input" placeholder="Passets tid"/>
            <input type="submit" className="sendBtn" name="skicka" id="skicka" value="Spara pass" />
        </form>
        </>
    )

}

export default CreateClassForm;