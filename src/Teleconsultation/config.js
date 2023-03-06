export const config = {
    /**
     * Flag indicating if add-people functionality should be enabled.
     * Default: enabled (true).
     */
    // ADD_PEOPLE_ENABLED : 'add-people.enabled',
    'add-people.enabled': false,

    /**
     * Flag indicating if the SDK should not require the audio focus.
     * Used by apps that do not use Jitsi audio.
     * Default: disabled (false).
     */
    // AUDIO_FOCUS_DISABLED : 'audio-focus.disabled';
    'audio-focus.disabled': false,

    /**
     * Flag indicating if the audio mute button should be displayed.
     * Default: enabled (true).
     */
    // AUDIO_MUTE_BUTTON_ENABLED : 'audio-mute.enabled';
    'audio-mute.enabled': true,

    /**
     * Flag indicating that the Audio only button in the overflow menu is enabled.
     * Default: enabled (true).
     */
    // AUDIO_ONLY_BUTTON_ENABLED : 'audio-only.enabled';
    'audio-only.enabled': true,

    /**
     * Flag indicating if calendar integration should be enabled.
     * Default: enabled (true) on Android, auto-detected on iOS.
     */
    // CALENDAR_ENABLED : 'calendar.enabled';
    'calendar.enabled': false,

    /**
     * Flag indicating if call integration (CallKit on iOS, ConnectionService on Android)
     * should be enabled.
     * Default: enabled (true).
     */
    // CALL_INTEGRATION_ENABLED : 'call-integration.enabled';
    'call-integration.enabled': false,

    /**
     * Flag indicating if close captions should be enabled.
     * Default: enabled (true).
     */
    // CLOSE_CAPTIONS_ENABLED : 'close-captions.enabled';
    'close-captions.enabled': true,

    /**
     * Flag indicating if conference timer should be enabled.
     * Default: enabled (true).
     */
    // CONFERENCE_TIMER_ENABLED : 'conference-timer.enabled';
    'conference-timer.enabled': true,

    /**
     * Flag indicating if chat should be enabled.
     * Default: enabled (true).
     */
    // CHAT_ENABLED : 'chat.enabled';
    'chat.enabled': false,

    /**
     * Flag indicating if the filmstrip should be enabled.
     * Default: enabled (true).
     */
    // FILMSTRIP_ENABLED : 'filmstrip.enabled';
    'filmstrip.enabled': true,

    /**
     * Flag indicating if fullscreen (immersive) mode should be enabled.
     * Default: enabled (true).
     */
    // FULLSCREEN_ENABLED : 'fullscreen.enabled';
    'fullscreen.enabled': true,

    /**
     * Flag indicating if the Help button should be enabled.
     * Default: enabled (true).
     */
    // HELP_BUTTON_ENABLED : 'help.enabled';
    'help.enabled': false,

    /**
     * Flag indicating if invite functionality should be enabled.
     * Default: enabled (true).
     */
    // INVITE_ENABLED : 'invite.enabled';
    'invite.enabled': false,

    /**
     * Flag indicating if recording should be enabled in iOS.
     * Default: disabled (false).
     */
    // IOS_RECORDING_ENABLED : 'ios.recording.enabled';
    'ios.recording.enabled': false,

    /**
     * Flag indicating if screen sharing should be enabled in iOS.
     * Default: disabled (false).
     */
    // IOS_SCREENSHARING_ENABLED : 'ios.screensharing.enabled';
    'ios.screensharing.enabled': false,

    /**
     * Flag indicating if screen sharing should be enabled in android.
     * Default: enabled (true).
     */
    // ANDROID_SCREENSHARING_ENABLED : 'android.screensharing.enabled';
    'android.screensharing.enabled': false,

    /**
     * Flag indicating if speaker statistics should be enabled.
     * Default: enabled (true).
     */
    // SPEAKERSTATS_ENABLED : 'speakerstats.enabled';
    'speakerstats.enabled': false,

    /**
     * Flag indicating if kickout is enabled.
     * Default: enabled (true).
     */
    // KICK_OUT_ENABLED : 'kick-out.enabled';
    'kick-out.enabled': false,

    /**
     * Flag indicating if live-streaming should be enabled.
     * Default: auto-detected.
     */
    // LIVE_STREAMING_ENABLED : 'live-streaming.enabled';
    'live-streaming.enabled': false,

    /**
     * Flag indicating if lobby mode button should be enabled.
     * Default: enabled.
     */
    // LOBBY_MODE_ENABLED : 'lobby-mode.enabled';
    'lobby-mode.enabled': false,

    /**
     * Flag indicating if displaying the meeting name should be enabled.
     * Default: enabled (true).
     */
    // MEETING_NAME_ENABLED : 'meeting-name.enabled';
    'meeting-name.enabled': true,

    /**
     * Flag indicating if the meeting password button should be enabled.
     * Note that this flag just decides on the button, if a meeting has a password
     * set, the password dialog will still show up.
     * Default: enabled (true).
     */
    // MEETING_PASSWORD_ENABLED : 'meeting-password.enabled';
    'meeting-password.enabled': false,

    /**
     * Flag indicating if the notifications should be enabled.
     * Default: enabled (true).
     */
    // NOTIFICATIONS_ENABLED : 'notifications.enabled';
    'notifications.enabled': true,

    /**
     * Flag indicating if the audio overflow menu button should be displayed.
     * Default: enabled (true).
     */
    // OVERFLOW_MENU_ENABLED : 'overflow-menu.enabled';
    'overflow-menu.enabled': false,

    /**
     * Flag indicating if Picture-in-Picture should be enabled.
     * Default: auto-detected.
     */
    // PIP_ENABLED : 'pip.enabled';
    'pip.enabled': false,

    /**
     * Flag indicating if raise hand feature should be enabled.
     * Default: enabled.
     */
    // RAISE_HAND_ENABLED : 'raise-hand.enabled';
    'raise-hand.enabled': false,

    /**
     * Flag indicating if the reactions feature should be enabled.
     * Default: enabled (true).
     */
    // REACTIONS_ENABLED : 'reactions.enabled';
    'reactions.enabled': false,

    /**
     * Flag indicating if recording should be enabled.
     * Default: auto-detected.
     */
    // RECORDING_ENABLED : 'recording.enabled';
    'recording.enabled': false,

    /**
     * Flag indicating if the user should join the conference with the replaceParticipant functionality.
     * Default: (false).
     */
    // REPLACE_PARTICIPANT : 'replace.participant';
    'replace.participant': false,

    /**
     * Flag indicating the local and (maximum) remote video resolution. Overrides
     * the server configuration.
     * Default: (unset).
     */
    // RESOLUTION : 'resolution';

    /**
     * Flag indicating if the security options button should be enabled.
     * Default: enabled (true).
     */
    // SECURITY_OPTIONS_ENABLED : 'security-options.enabled';
    'security-options.enabled': false,

    /**
     * Flag indicating if server URL change is enabled.
     * Default: enabled (true).
     */
    // SERVER_URL_CHANGE_ENABLED : 'server-url-change.enabled';

    /**
     * Flag indicating if tile view feature should be enabled.
     * Default: enabled.
     */
    // TILE_VIEW_ENABLED : 'tile-view.enabled';
    'tile-view.enabled': true,

    /**
     * Flag indicating if the toolbox should be always be visible
     * Default: disabled (false).
     */
    // TOOLBOX_ALWAYS_VISIBLE : 'toolbox.alwaysVisible';
    'toolbox.alwaysVisible': true,

    /**
     * Flag indicating if the toolbox should be enabled
     * Default: enabled.
     */
    // TOOLBOX_ENABLED : 'toolbox.enabled';
    'toolbox.enabled': true,

    /**
     * Flag indicating if the video mute button should be displayed.
     * Default: enabled (true).
     */
    // VIDEO_MUTE_BUTTON_ENABLED : 'video-mute.enabled';
    'video-mute.enabled': true,

    /**
     * Flag indicating if the video share button should be enabled
     * Default: enabled (true).
     */
    // VIDEO_SHARE_BUTTON_ENABLED : 'video-share.enabled';
    'video-share.enabled': false,

    /**
     * Flag indicating if the welcome page should be enabled.
     * Default: disabled (false).
     */
    // WELCOME_PAGE_ENABLED : 'welcomepage.enabled';
    'welcomepage.enabled': false,
  };