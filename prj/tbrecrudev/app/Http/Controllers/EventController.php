<?php

namespace App\Http\Controllers;
use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    public function store(Request $request)
    {
        
        $event=[
            'title' => $request->title,
            'description' => $request->description,
            'date' => $request->date,
            'start_time' => $request->start_time,
            'end_time' => $request->end_time,
            'type' => $request->type,
        ];
       
        // Сохранение данных в БД
         Event::create($event);
        return Inertia::render('sendntg',['event'=>$event]);
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
    public function aevent(Request $request){
            $eid=$request->query('eid');
            $event=Event::findOrFail($eid);
            return Inertia::render('modules/cmsGeneral/CMSGeneral',['event'=>$event]);
    }
}
