@extends('layouts.auth')
@section('title')
Mot de passe oublié -
@endsection
@section('content')

<div class="card o-hidden border-0 shadow-lg my-5">
    <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
            <div class="col-lg-6">
                <div class="p-5">
                    <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Section d'administration</h1>
                        <p class="mb-4">On comprend, il se passe des choses. Entrez simplement votre adresse e-mail
                            ci-dessous
                            et nous vous enverrons un lien pour réinitialiser votre mot de passe!</p>
                    </div>
                    @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                    @endif
                    <form method="POST" class="user" action="{{ route('password.email') }}">
                        @csrf
                        <div class="form-group">

                            <input id="email" type="email"
                                class="form-control form-control-user @error('email') is-invalid @enderror" name="email"
                                value="{{ old('email') }}" required placeholder="Entrer Email Adresse"
                                autocomplete="email" autofocus>
                            @error('email')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>


                        <button type="submit" class="btn btn-orange btn-user btn-block">
                            {{ __('Envoyer une demande de réinitialisation') }}
                        </button>



                    </form>
                    <hr>
                    @if (Route::has('login'))

                    <div class="text-center">
                        <a class="small " href="{{ route('login') }}">
                            {{ __('Connectez-vous ici') }}
                        </a>
                    </div>
                    @endif


                </div>
            </div>
        </div>
    </div>
</div>
@endsection
