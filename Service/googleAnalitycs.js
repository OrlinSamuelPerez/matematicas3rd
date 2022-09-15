import { logEvent, setUserId } from "firebase/analytics";
import { analyticsApp, auth } from "../BD/Configuracion";
import { getAnalytics } from "firebase/analytics";

const viewController =()=>{
    if ( typeof window !== 'undefined') {
        auth.onAuthStateChanged(user=>{
            if(user != null){
                const analytics = getAnalytics(analyticsApp)
                logEvent(analytics, 'notification_received');
                logEvent(analytics, 'select_content', {
                    content_type: 'image',
                    correo: user.email,
                    items: [{ name: 'Kittens' }]
                  });
            }
        })
        
      }
   
}

export function googleAnalitycs(){
    viewController()
}