basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
