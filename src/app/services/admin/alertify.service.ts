import { Injectable } from '@angular/core';
declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  constructor() { }

  //message(message: string, messageType : MessageType, messagePosition: MessagePosition, delay: number = 3, dismissOthers: boolean = false){
  message(message: string, options: Partial<AlertifyOptions>){
    alertify.set('notifier','position', options.messagePosition);
    alertify.set('notifier','delay', options.delay);
    const msj = alertify[options.messageType](message);
    if(options.dismissOthers) msj.dismissOthers();

  }

  dismissAll(){
    alertify.dismissAll();
  }



}
export class AlertifyOptions{
  messageType : MessageType = MessageType.Message;
  messagePosition: MessagePosition = MessagePosition.BottomLeft;
  delay: number = 3;
  dismissOthers: boolean = false;
}

export enum MessageType{
  Error = "error",
  Message = "message",
  Notify = "notify",
  Success = "success",
  Warning = "warning"
}

export enum MessagePosition{
  TopCenter = "top-center",
  TopRight = "top-right",
  TopLeft = "top-left",
  BottomCenter = "bottom-center",
  BottomRight = "bottom-right",
  BottomLeft = "bottom-left",
}
