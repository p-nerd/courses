<?php

use App\Models\Note;
use Livewire\Volt\Component;

new class extends Component
{
    public function with(): array
    {
        return [
            'notes' => Note::query()
                ->where('user_id', auth()->id())
                ->orderBy('send_date', 'asc')
                ->get(),
        ];
    }
};

?>

<div>
<div class="grid grid-cols-2 gap-4 mt-12">
    @foreach ($notes as $note)
    <x-card wire:key="{{ $note->id }}">
        <div class="flex justify-between">
            <a href="/notes/{{ $note->id }}">{{ $note->title }}</a>
            <div>{{ \Illuminate\Support\Carbon::parse($note->send_date)->format('M-d-Y') }}</div>
        </div>

    </x-card>
    @endforeach
</div>
</div>
