<h1 class="pb-5">Register</h1>

<form action="/register" method="post">
    <div class="form-control space-y-5">
        <label class="input-group input-group-vertical">
            <span>Name: </span>
            <input name="name" type="text" placeholder="Shihab Mahamud" class="input input-bordered" />
        </label>
        <label class="input-group input-group-vertical">
            <span>Email: </span>
            <input name="email" type="email" placeholder="info@site.com" class="input input-bordered" />
        </label>
        <label class="input-group input-group-vertical">
            <span>Password: </span>
            <input name="password" type="password" placeholder="******" class="input input-bordered" />
        </label>
        <label class="input-group input-group-vertical">
            <span>Confirm Password: </span>
            <input name="confirm_password" type="password" placeholder="******" class="input input-bordered" />
        </label>
        <button class="btn btn-primary text-white" type="submit">Register</button>
    </div>
</form>