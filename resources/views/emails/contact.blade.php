@component('mail::message')
# {{$subject}}
{{$msg}}



 De : <strong>{{$sender->name }}</strong> <{{$sender->email}}>
@endcomponent
