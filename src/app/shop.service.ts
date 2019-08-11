import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataStr, Data, toData } from './shop'

const data: Data = toData({

	"person": {

		"id": "0",

		"name": "Hero",

		"armor": "10",

		"attack": "25",

		"health": "100",

		"img": "http://test.datalb.ru/assets/Dude-1.png",

		"alt-img": "http://test.datalb.ru/assets/Dude-2.png"

	},

	"equipment": {

		"helmets": 

		[{

			"id": "0",

			"name": "gray helmet",

			"price": "100",

			"armor": "2",

			"attack": "0",

			"health": "5",

			"img": "http://test.datalb.ru/assets/Helmet-1.png"

		},

		{

			"id": "1",

			"name": "green helmet",

			"price": "200",

			"armor": "4",

			"attack": "0",

			"health": "10",

			"img": "http://test.datalb.ru/assets/Helmet-2.png"

		},

		{

			"id": "2",

			"name": "purple helmet",

			"price": "400",

			"armor": "6",

			"attack": "0",

			"health": "15",

			"img": "http://test.datalb.ru/assets/Helmet-3.png"

		}],

		"gloves": 

		[{

			"id": "0",

			"name": "gray gloves",

			"price": "100",

			"armor": "2",

			"attack": "0",

			"health": "5",

			"img": "http://test.datalb.ru/assets/Gloves-1.png"

		},

		{

			"id": "1",

			"name": "green gloves",

			"price": "200",

			"armor": "4",

			"attack": "0",

			"health": "10",

			"img": "http://test.datalb.ru/assets/Gloves-2.png"

		},

		{

			"id": "2",

			"name": "purple gloves",

			"price": "400",

			"armor": "6",

			"attack": "0",

			"health": "15",

			"img": "http://test.datalb.ru/assets/Gloves-3.png"

		}],

		"chests": 

		[{

			"id": "0",

			"name": "gray chest",

			"price": "200",

			"armor": "10",

			"attack": "0",

			"health": "20",

			"img": "http://test.datalb.ru/assets/Chest-1.png"

		},

		{

			"id": "1",

			"name": "green chest",

			"price": "400",

			"armor": "15",

			"attack": "0",

			"health": "30",

			"img": "http://test.datalb.ru/assets/Chest-2.png"

		},

		{

			"id": "2",

			"name": "purple chest",

			"price": "800",

			"armor": "20",

			"attack": "0",

			"health": "40",

			"img": "http://test.datalb.ru/assets/Chest-3.png"

		}],

		"boots": 

		[{

			"id": "0",

			"name": "gray boots",

			"price": "100",

			"armor": "2",

			"attack": "0",

			"health": "5",

			"img": "http://test.datalb.ru/assets/Boots-1.png"

		},

		{

			"id": "1",

			"name": "green boots",

			"price": "200",

			"armor": "4",

			"attack": "0",

			"health": "10",

			"img": "http://test.datalb.ru/assets/Boots-2.png"

		},

		{

			"id": "2",

			"name": "purple boots",

			"price": "400",

			"armor": "6",

			"attack": "0",

			"health": "15",

			"img": "http://test.datalb.ru/assets/Boots-3.png"

		}],

		"swords": 

		[{

			"id": "0",

			"name": "gray sword",

			"price": "500",

			"armor": "0",

			"attack": "15",

			"health": "0",

			"img": "http://test.datalb.ru/assets/Sword-1.png"

		},

		{

			"id": "1",

			"name": "green sword",

			"price": "1000",

			"armor": "0",

			"attack": "25",

			"health": "0",

			"img": "http://test.datalb.ru/assets/Sword-2.png"

		},

		{

			"id": "2",

			"name": "purple sword",

			"price": "1500",

			"armor": "0",

			"attack": "35",

			"health": "0",

			"img": "http://test.datalb.ru/assets/Sword-3.png"

		}]

	}

})

@Injectable({
  providedIn: 'root'
})
export class ShopService {

	// private dataUrl = 'http://test.datalb.ru/test.json';

  getData(): Observable<Data> {
    // return this.http.get<DataStr>(this.dataUrl).pipe(
    //   map(dataStr => toData(dataStr))
    // );
    return of(data)
  }

  constructor(
    private http: HttpClient) { }
}
