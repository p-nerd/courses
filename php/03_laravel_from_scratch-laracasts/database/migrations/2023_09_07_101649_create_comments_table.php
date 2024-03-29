<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();

//            $table->unsignedBigInteger("post_id");
//            $table->foreign("post_id")->references("id")->on("posts")->cascadeOnDelete();

            $table->foreignId("post_id")->constrained()->cascadeOnDelete();

//            $table->unsignedBigInteger("user_id");
//            $table->foreign("user_id")->references("id")->on("users");

            $table->foreignId("user_id")->constrained()->cascadeOnDelete();

            $table->timestamps();

            $table->text("body");
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};
