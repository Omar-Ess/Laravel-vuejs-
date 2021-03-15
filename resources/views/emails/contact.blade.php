@component('mail::message')
# {{$subject}}

{{$message}}



 De : <strong>{{$sender->name }}</strong> <{{$sender->email}}>
@endcomponent
