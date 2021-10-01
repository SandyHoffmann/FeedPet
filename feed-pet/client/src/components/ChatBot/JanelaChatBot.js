
import "./styles.css";
export function JanelaChatBot (props){
    return(
    <div className="chattotal">
        <input type="checkbox" id="check" />
            <label class="chat-btn" for="check"> 
        <i class="fa fa-commenting-o comment"></i> 
        <i class="fa fa-close close"></i> 
        </label>
        <div class="wrapper">
            <div class="header">
                <h6>Let's Chat - Online</h6>
            </div>
            <div class="text-center p-2"> <span>Please fill out the form to start chat!</span> </div>
            <div class="chat-form"/> <input type="text" class="form-control" placeholder="Name"/> <input type="text" class="form-control" placeholder="Email"/> <textarea class="form-control" placeholder="Your Text Message"></textarea> <button class="btn btn-success btn-block">Submit</button> 
        </div>
    </div>
    )};
