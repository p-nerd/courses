<h1 class="pb-5">Login</h1>

<form action="/login" method="post">
    <div class="form-control space-y-5">
        <label class="input-group input-group-vertical">
            <span>Email: </span>
            <input name="email" type="email" placeholder="info@site.com" class="input input-bordered" />
        </label>
        <label class="input-group input-group-vertical">
            <span>Password: </span>
            <input name="password" type="password" placeholder="******" class="input input-bordered" />
        </label>
        <button class="btn btn-primary text-white" type="submit">Login</button>
    </div>
</form>