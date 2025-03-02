<?php

namespace App\Http\Controllers;
use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    public function store(Request $request)
    {
        
        
        // Сохранение данных в БД
         Event::create([
            'title' => $request->title,
            'description' => $request->description,
            'date' => $request->date,
            'start_time' => $request->start_time,
            'end_time' => $request->end_time,
            'type' => $request->type,
        ]);
        $events=$request;
        // Перенаправление после успешного сохранения

        return inertia('/sendntg',['events'=>$events])->with('success', 'Событие успешно создано!');
        //return redirect()->route('events.index')->with('success', 'Событие успешно создано!');
    }
    public function show(){
        $events=Event::all();//->get();
       // dd($events);
        return Inertia::render('CMS/CMShome',["events"=>$events]);
    }
    public function delete(Request $request){
        $eid=$request->eventId;
        $event = Event::findOrFail($eid);

      
        $event->delete();

        return redirect('/')->with('success', 'Событие успешно удалено!');
    }
}
