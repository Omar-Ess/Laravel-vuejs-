@extends('layouts.auth')
@section('title')
 | Login
@endsection
@section('content')
    <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div class="col-lg-6" >
                    <div class="p-5">
                        <div class="text-center">
                            <h1 class="h4 text-gray-900 mb-4">Section d'administration</h1>

                        </div>

                        <form method="POST" class="user" action="{{ route('login') }}">

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
                            <div class="form-group">
                                <input id="password" type="password"
                                    class="form-control form-control-user @error('password') is-invalid @enderror"
                                    name="password" required autocomplete="current-password"
                                    placeholder="Entrer Mot de Passe">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror

                            </div>
                            <div class="form-group">
                                <div class="custom-control custom-checkbox small">
                                    <input class="custom-control-input" type="checkbox" name="remember" id="remember"
                                        {{ old('remember') ? 'checked' : '' }}>

                                    <label class="custom-control-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>

                                </div>
                            </div>

                            <button type="submit" class="btn btn-danger btn-user btn-block">
                                {{ __('Login') }}
                            </button>



                        </form>
                        <hr>
                        @if (Route::has('password.request'))

                            <div class="text-center">
                                <a class="small " href="{{ route('password.request') }}">
                                    {{ __('Mot de Passe Oublié ?') }}
                                </a>
                            </div>
                        @endif


                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
