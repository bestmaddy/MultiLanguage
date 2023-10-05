import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Emoloye } from '../modules/employe';

@Injectable({
  providedIn: 'root'
})
export class LanServiceService {
  selectLang = new BehaviorSubject('en')
  constructor() { }

  getEmployee(){
    return employee;
  }
}
const employee: Emoloye[] = [
  {
    "Id": "25768d9f-502a-4776-8796-c26d76d6a6eb",
    "EmployeeName": "Abhay Singh",
    "StarTimeUtc": "2022-02-22T14:15:00",
    "EndTimeUtc": "2022-02-22T12:01:00",
    "EntryNotes": "working on project Take-Two Interactive",
    "DeletedOn": null
},
{
    "Id": "77e4bfce-5b1b-4103-8ae0-5e22a96fe6f4",
    "EmployeeName": "Tamoy Smith",
    "StarTimeUtc": "2022-02-21T09:42:00",
    "EndTimeUtc": "2022-02-21T13:02:00",
    "EntryNotes": "analyzing ticket in Towers Perrin",
    "DeletedOn": null
},
{
    "Id": "ac9cc343-083c-45bf-9058-9a73d15b76f7",
    "EmployeeName": "Mary Poppins",
    "StarTimeUtc": "2022-02-23T12:40:00",
    "EndTimeUtc": "2022-02-23T16:26:00",
    "EntryNotes": "debugging issue in THQ",
    "DeletedOn": null
},
{
    "Id": "f5ff7946-1eb4-413b-902c-6f315b6b18fb",
    "EmployeeName": "Mary Poppins",
    "StarTimeUtc": "2022-02-05T07:40:00",
    "EndTimeUtc": "2022-02-05T08:33:00",
    "EntryNotes": "reviewing patch for Shure",
    "DeletedOn": null
},
{
    "Id": "a8c92670-0b0f-4811-8bbb-7c890b834659",
    "EmployeeName": "Patrick Huthinson",
    "StarTimeUtc": "2022-02-23T07:17:00",
    "EndTimeUtc": "2022-02-23T09:48:00",
    "EntryNotes": "analyzing ticket in Southern California Edison",
    "DeletedOn": null
},
{
    "Id": "51b102ec-709f-4436-8f6b-07cc79775c23",
    "EmployeeName": "Abhay Singh",
    "StarTimeUtc": "2022-02-22T15:07:00",
    "EndTimeUtc": "2022-02-22T16:44:00",
    "EntryNotes": "analyzing ticket in McCormick & Company",
    "DeletedOn": null
},
{
    "Id": "a156a153-c0bc-4b22-a0c0-2caf193cd636",
    "EmployeeName": "Kavvay Verma",
    "StarTimeUtc": "2022-02-10T09:58:00",
    "EndTimeUtc": "2022-02-10T11:53:00",
    "EntryNotes": "debugging issue in SAIC",
    "DeletedOn": null
},
{
    "Id": "eab0768d-ca66-41f8-bc1a-b2787f97ee5f",
    "EmployeeName": "John Black",
    "StarTimeUtc": "2022-02-28T12:43:00",
    "EndTimeUtc": "2022-02-28T16:16:00",
    "EntryNotes": "completing coding for Time Warner Cable",
    "DeletedOn": null
},
{
    "Id": "cb0d82ba-1932-40d4-8af4-025965b9555e",
    "EmployeeName": "Tim Perkinson",
    "StarTimeUtc": "2022-02-07T07:51:00",
    "EndTimeUtc": "2022-02-07T11:40:00",
    "EntryNotes": "debugging issue in Martha Stewart Living Omnimedia",
    "DeletedOn": null
},
{
    "Id": "10a96126-0995-4369-aca4-1417d76ad348",
    "EmployeeName": "Abhay Singh",
    "StarTimeUtc": "2022-02-04T10:25:00",
    "EndTimeUtc": "2022-02-04T10:59:00",
    "EntryNotes": "working on project Seattle's Best Coffee",
    "DeletedOn": null
},
{
    "Id": "c7af3ce6-5425-47ac-ab69-02d764263f4c",
    "EmployeeName": "Rita Alley",
    "StarTimeUtc": "2022-02-10T07:22:00",
    "EndTimeUtc": "2022-02-10T08:50:00",
    "EntryNotes": "working on project Service Corporation International (SCI)",
    "DeletedOn": null
},
{
    "Id": "a569eba2-3b2a-4dde-80f5-7c3c0853b566",
    "EmployeeName": "Patrick Huthinson",
    "StarTimeUtc": "2022-02-11T11:46:00",
    "EndTimeUtc": "2022-02-11T12:33:00",
    "EntryNotes": "testing fix for The Library Corporation (TLC)",
    "DeletedOn": null
},
{
    "Id": "92da4509-c5d0-49a6-9a46-b6b8b41fb682",
    "EmployeeName": "Patrick Huthinson",
    "StarTimeUtc": "2022-02-06T08:08:00",
    "EndTimeUtc": "2022-02-06T08:22:00",
    "EntryNotes": "reviewing patch for MasterCard",
    "DeletedOn": null
},
{
    "Id": "30adfc49-6714-4786-aa66-8b37770ecb8f",
    "EmployeeName": "Tim Perkinson",
    "StarTimeUtc": "2022-02-17T08:05:00",
    "EndTimeUtc": "2022-02-17T11:17:00",
    "EntryNotes": "testing fix for SAIC",
    "DeletedOn": null
},
{
    "Id": "c0da5073-f5c5-41ce-bdfd-5bd4cdb20aad",
    "EmployeeName": "Abhay Singh",
    "StarTimeUtc": "2022-02-19T12:18:00",
    "EndTimeUtc": "2022-02-19T12:37:00",
    "EntryNotes": "analyzing ticket in Six Flags",
    "DeletedOn": null
},
{
    "Id": "c8869d82-40d0-4329-b2ea-5a8230024920",
    "EmployeeName": "Abhay Singh",
    "StarTimeUtc": "2022-02-10T12:21:00",
    "EndTimeUtc": "2022-02-10T14:43:00",
    "EntryNotes": "analyzing ticket in Trianz",
    "DeletedOn": null
},
{
    "Id": "28b9b1ac-3b75-426a-9983-b6cbdc890b63",
    "EmployeeName": "Mary Poppins",
    "StarTimeUtc": "2022-02-07T11:23:00",
    "EndTimeUtc": "2022-02-07T11:51:00",
    "EntryNotes": "working on project XIM, Inc.",
    "DeletedOn": null
},
{
    "Id": "cd90b651-3230-4b27-a570-b98945d7490b",
    "EmployeeName": "Patrick Huthinson",
    "StarTimeUtc": "2022-02-03T11:16:00",
    "EndTimeUtc": "2022-02-03T14:25:00",
    "EntryNotes": "debugging issue in Xilinx",
    "DeletedOn": null
},
{
    "Id": "cc237237-4fd6-422f-8f4a-ca64264b4074",
    "EmployeeName": "Raju Sunuwar",
    "StarTimeUtc": "2022-02-24T09:20:00",
    "EndTimeUtc": "2022-02-24T12:18:00",
    "EntryNotes": "testing fix for Martha Stewart Living Omnimedia",
    "DeletedOn": null
},
{
    "Id": "35a06ca5-dedc-4f0b-84d4-51f3a976f82e",
    "EmployeeName": "Kavvay Verma",
    "StarTimeUtc": "2022-02-12T09:14:00",
    "EndTimeUtc": "2022-02-12T09:39:00",
    "EntryNotes": "analyzing ticket in XPAC",
    "DeletedOn": null
},
{
    "Id": "2cce3dff-92ee-437f-9ec6-fc33edb85683",
    "EmployeeName": "Kavvay Verma",
    "StarTimeUtc": "2022-02-19T07:42:00",
    "EndTimeUtc": "2022-02-19T11:09:00",
    "EntryNotes": "completing coding for McIlhenny Company",
    "DeletedOn": null
},
{
    "Id": "9f2a5b93-18bf-496d-aa9c-8109c63d1889",
    "EmployeeName": "John Black",
    "StarTimeUtc": "2022-02-11T07:37:00",
    "EndTimeUtc": "2022-02-11T09:33:00",
    "EntryNotes": "analyzing ticket in Shure",
    "DeletedOn": "2022-02-12T11:33:00"
},
{
    "Id": "357e535a-0f1e-4786-9763-d4547dac9779",
    "EmployeeName": "Tim Perkinson",
    "StarTimeUtc": "2022-02-10T08:05:00",
    "EndTimeUtc": "2022-02-10T11:09:00",
    "EntryNotes": "debugging issue in Tropicana Products",
    "DeletedOn": null
},
{
    "Id": "4ac29b5b-0599-4fd0-8194-e696bc91c295",
    "EmployeeName": "Patrick Huthinson",
    "StarTimeUtc": "2022-02-14T12:51:00",
    "EndTimeUtc": "2022-02-14T15:52:00",
    "EntryNotes": "completing coding for SkyWest Airlines",
    "DeletedOn": null
},
{
    "Id": "8f065ab0-fd8c-47f0-8647-5d5c8012c2a8",
    "EmployeeName": "John Black",
    "StarTimeUtc": "2022-02-27T12:41:00",
    "EndTimeUtc": "2022-02-27T13:31:00",
    "EntryNotes": "completing coding for Magnavox",
    "DeletedOn": null
},
{
    "Id": "a05238e1-7492-457c-bc39-af071994f863",
    "EmployeeName": "Mary Poppins",
    "StarTimeUtc": "2022-02-25T09:10:00",
    "EndTimeUtc": "2022-02-25T10:20:00",
    "EntryNotes": "analyzing ticket in Service Corporation International (SCI)",
    "DeletedOn": null
},
{
    "Id": "2920b874-e6da-4940-b1e7-14df23fde255",
    "EmployeeName": "Abhay Singh",
    "StarTimeUtc": "2022-02-21T07:35:00",
    "EndTimeUtc": "2022-02-21T11:01:00",
    "EntryNotes": "completing coding for Towers Perrin",
    "DeletedOn": null
},
{
    "Id": "8871f7b9-8165-40f7-aaae-571cd4c24b0f",
    "EmployeeName": "Rita Alley",
    "StarTimeUtc": "2022-02-17T08:22:00",
    "EndTimeUtc": "2022-02-17T09:28:00",
    "EntryNotes": "testing fix for Martha Stewart Living Omnimedia",
    "DeletedOn": null
},
{
    "Id": "6181272e-8b0c-48ff-9c08-0bd6032b567b",
    "EmployeeName": "Raju Sunuwar",
    "StarTimeUtc": "2022-02-20T08:57:00",
    "EndTimeUtc": "2022-02-20T11:06:00",
    "EntryNotes": "reviewing patch for Schoep's Ice Cream",
    "DeletedOn": null
},
]
