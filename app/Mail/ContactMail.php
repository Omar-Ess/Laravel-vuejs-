<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;
    public $subject;
    public $msg;
    public $sender;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($subject, $message, $sender)
    {
        $this->subject = $subject;
        $this->msg = $message;
        $this->sender = $sender;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->replyTo($this->sender->email)
            ->view('emails.contact');
    }
}
