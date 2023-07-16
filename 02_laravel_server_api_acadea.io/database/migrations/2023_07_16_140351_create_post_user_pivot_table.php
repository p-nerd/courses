<?php

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('post_user_pivot', function (Blueprint $table) {
            $table->foreignIdFor(User::class, "user_id")
                ->primary()
                ->index()
                ->references("id")
                ->cascadeOnDelete();
            $table->foreignIdFor(Post::class, "post_id")
                ->primary()
                ->index()
                ->references("id")
                ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('post_user_pivot');
    }
};
