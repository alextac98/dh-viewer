// Generate NanoID
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', 10);

let db = [generate_dh_block("Link 0")];

export function get_data() {
    return db;
}

// ****************************** //
// ***** DH Table Functions ***** //
// ****************************** //

export function create_new_dh_row(){
    const name = "Link " + db.length;
    const dh = {
        "d": 0,
        "theta": 0,
        "r": 0,
        "alpha": 0
    };
    const block = generate_dh_block(name, dh);
    db.push(block)
    return block;
}

export function generate_dh_block(name, dh={"d": 0, "theta": 0, "r": 0, "alpha": 0}, model_uri=""){
    return {
        "id": nanoid(),
        "name": name,
        "dh": dh,
        "link_model_uri": model_uri
    };
}

export function changeDHTable(id, param, value){
    for (let link of db){
        if (link.id !== id){
            continue;
        }
        switch (param) {
            case "name":
                link.name = value;
                break;
            case "d":
                link.dh.d = value;
                break;
            case "theta":
                link.dh.theta = value;
                break;
            case "r":
                link.dh.r = value;
                break;
            case "alpha":
                link.dh.alpha = value;
                break;
            default:
                console.error("DH Parameter of " + param + " is not valid!")
        }
        return db;
    }
}

export function deleteRow(id) {
    let i = 0;
    for (let row of db){
        if (row.id === id) {
            break;
        }
        i++;
    }
    db.splice(i, 1);
    return i;
}