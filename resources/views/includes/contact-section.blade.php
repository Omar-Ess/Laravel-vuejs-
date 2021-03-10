<section id="contact" class="contact">
    <div class="container">

        <div class="section-title"  data-aos="fade-up">
            <h2>Contact</h2>
            <h3><span>Contactez Nous</span></h3>
            <p>N'hésitez pas à nous contacter à tout moment.</p>
        </div>

        <div class="row" data-aos="fade-up" >
            <div class="col-lg-6">
                <div class="info-box mb-4">
                    <i class="bx bx-map"></i>
                    <h3>Notre Addresse</h3>
                    <p>{{ $address->content }}</p>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="info-box  mb-4">
                    <i class="bx bx-envelope"></i>
                    <h3>Envoyez-nous un email</h3>
                    <p>{{ $email->content }}</p>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="info-box  mb-4">
                    <i class="bx bx-phone-call"></i>
                    <h3>Appelez nous</h3>
                    <p>{{ $phone->content }}</p>
                </div>
            </div>

        </div>
        @if (request()->is('contact'))

            <div class="row" >

                <div class="col-lg-6 ">
                    <iframe class="mb-4 mb-lg-0"
                  src="https://www.google.com/maps/embed/v1/place?q=place_id:EipSdWUgZGVzIEFuZ2xhaXMsIENhc2FibGFuY2EgMjAyNTAsIE1vcm9jY28iLiosChQKEgktDbNUjtKnDRGcubXH0uY96RIUChIJOxGqeEfNpw0R0w8xT9jBBgs&key=AIzaSyDh0rcfCAfZt_OBjHtSFKFIKcFILkU-4VE"
                    frameborder="0" style="border:0; width: 100%; height: 384px;" allowfullscreen></iframe>
                </div>

                <div class="col-lg-6" data-aos="fade-up" >
                    <form action="{{ route('contact.store') }}" method="POST" role="form" class="php-email-form">
                        @csrf
                        @if (count($errors) > 0)
                            <div class="alert alert-danger alert-dismissible">
                                <ul style="list-style-type: none">
                                    @foreach ($errors->all() as $error)
                                        <li><i class="fa fa-exclamation-circle"></i> {{ $error }}</li>

                                    @endforeach
                                </ul>
                            </div>


                        @endif
                        @if (session()->has('success_message'))
                            <div class="alert alert-success">
                                <i class="fa fa-check-circle"></i> {{ session()->get('success_message') }}</li>
                            </div>

                        @endif
                        <div class="form-row">
                            <div class="col form-group">
                                <input required type="text" name="name" class="form-control" id="name" placeholder="Votre Nom" />
                            </div>
                            <div class="col form-group">
                                <input required type="email" class="form-control" name="email" id="email"
                                    placeholder="Votre Email" />
                            </div>
                        </div>
                        <div class="form-group">
                            <input required type="text" class="form-control" name="subject" id="subject"
                                placeholder="Votre Sujet" />
                        </div>
                        <div class="form-group">
                            <textarea required class="form-control" name="message" rows="5"
                                placeholder=" Votre Message"></textarea>
                        </div>

                        <div class="text-center"><button type="submit" class="btn-block">Envoyez</button></div>
                    </form>
                </div>

            </div>
        @endif

    </div>
</section>
